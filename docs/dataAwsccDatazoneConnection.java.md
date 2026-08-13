# `dataAwsccDatazoneConnection` Submodule <a name="`dataAwsccDatazoneConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazoneConnection <a name="DataAwsccDatazoneConnection" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_connection awscc_datazone_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnection;

DataAwsccDatazoneConnection.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_connection#id DataAwsccDatazoneConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatazoneConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnection;

DataAwsccDatazoneConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnection;

DataAwsccDatazoneConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnection;

DataAwsccDatazoneConnection.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnection;

DataAwsccDatazoneConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccDatazoneConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccDatazoneConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccDatazoneConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccDatazoneConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazoneConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.awsLocation">awsLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference">DataAwsccDatazoneConnectionAwsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.configurations">configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList">DataAwsccDatazoneConnectionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainUnitId">domainUnitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.enableTrustedIdentityPropagation">enableTrustedIdentityPropagation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentUserRole">environmentUserRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.projectIdentifier">projectIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.props">props</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference">DataAwsccDatazoneConnectionPropsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `awsLocation`<sup>Required</sup> <a name="awsLocation" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.awsLocation"></a>

```java
public DataAwsccDatazoneConnectionAwsLocationOutputReference getAwsLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference">DataAwsccDatazoneConnectionAwsLocationOutputReference</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.configurations"></a>

```java
public DataAwsccDatazoneConnectionConfigurationsList getConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList">DataAwsccDatazoneConnectionConfigurationsList</a>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

---

##### `domainUnitId`<sup>Required</sup> <a name="domainUnitId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainUnitId"></a>

```java
public java.lang.String getDomainUnitId();
```

- *Type:* java.lang.String

---

##### `enableTrustedIdentityPropagation`<sup>Required</sup> <a name="enableTrustedIdentityPropagation" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.enableTrustedIdentityPropagation"></a>

```java
public IResolvable getEnableTrustedIdentityPropagation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentIdentifier"></a>

```java
public java.lang.String getEnvironmentIdentifier();
```

- *Type:* java.lang.String

---

##### `environmentUserRole`<sup>Required</sup> <a name="environmentUserRole" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentUserRole"></a>

```java
public java.lang.String getEnvironmentUserRole();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.projectIdentifier"></a>

```java
public java.lang.String getProjectIdentifier();
```

- *Type:* java.lang.String

---

##### `props`<sup>Required</sup> <a name="props" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.props"></a>

```java
public DataAwsccDatazoneConnectionPropsOutputReference getProps();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference">DataAwsccDatazoneConnectionPropsOutputReference</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazoneConnectionAwsLocation <a name="DataAwsccDatazoneConnectionAwsLocation" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionAwsLocation;

DataAwsccDatazoneConnectionAwsLocation.builder()
    .build();
```


### DataAwsccDatazoneConnectionConfig <a name="DataAwsccDatazoneConnectionConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionConfig;

DataAwsccDatazoneConnectionConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datazone_connection#id DataAwsccDatazoneConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazoneConnectionConfigurations <a name="DataAwsccDatazoneConnectionConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionConfigurations;

DataAwsccDatazoneConnectionConfigurations.builder()
    .build();
```


### DataAwsccDatazoneConnectionProps <a name="DataAwsccDatazoneConnectionProps" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionProps;

DataAwsccDatazoneConnectionProps.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsAmazonQProperties <a name="DataAwsccDatazoneConnectionPropsAmazonQProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsAmazonQProperties;

DataAwsccDatazoneConnectionPropsAmazonQProperties.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsAthenaProperties <a name="DataAwsccDatazoneConnectionPropsAthenaProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsAthenaProperties;

DataAwsccDatazoneConnectionPropsAthenaProperties.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsGlueProperties <a name="DataAwsccDatazoneConnectionPropsGlueProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGlueProperties;

DataAwsccDatazoneConnectionPropsGlueProperties.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput;

DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration;

DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials;

DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties;

DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties;

DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication;

DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials;

DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements;

DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsHyperPodProperties <a name="DataAwsccDatazoneConnectionPropsHyperPodProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsHyperPodProperties;

DataAwsccDatazoneConnectionPropsHyperPodProperties.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsIamProperties <a name="DataAwsccDatazoneConnectionPropsIamProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsIamProperties;

DataAwsccDatazoneConnectionPropsIamProperties.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsLakehouseProperties <a name="DataAwsccDatazoneConnectionPropsLakehouseProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsLakehouseProperties;

DataAwsccDatazoneConnectionPropsLakehouseProperties.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsMlflowProperties <a name="DataAwsccDatazoneConnectionPropsMlflowProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsMlflowProperties;

DataAwsccDatazoneConnectionPropsMlflowProperties.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsRedshiftProperties <a name="DataAwsccDatazoneConnectionPropsRedshiftProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsRedshiftProperties;

DataAwsccDatazoneConnectionPropsRedshiftProperties.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials;

DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword;

DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync;

DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule;

DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage;

DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsS3Properties <a name="DataAwsccDatazoneConnectionPropsS3Properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsS3Properties;

DataAwsccDatazoneConnectionPropsS3Properties.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsSparkEmrProperties <a name="DataAwsccDatazoneConnectionPropsSparkEmrProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsSparkEmrProperties;

DataAwsccDatazoneConnectionPropsSparkEmrProperties.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsSparkGlueProperties <a name="DataAwsccDatazoneConnectionPropsSparkGlueProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsSparkGlueProperties;

DataAwsccDatazoneConnectionPropsSparkGlueProperties.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs <a name="DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs;

DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.builder()
    .build();
```


### DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties <a name="DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties;

DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazoneConnectionAwsLocationOutputReference <a name="DataAwsccDatazoneConnectionAwsLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionAwsLocationOutputReference;

new DataAwsccDatazoneConnectionAwsLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.accessRole">accessRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.iamConnectionId">iamConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation">DataAwsccDatazoneConnectionAwsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.accessRole"></a>

```java
public java.lang.String getAccessRole();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `iamConnectionId`<sup>Required</sup> <a name="iamConnectionId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.iamConnectionId"></a>

```java
public java.lang.String getIamConnectionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionAwsLocation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation">DataAwsccDatazoneConnectionAwsLocation</a>

---


### DataAwsccDatazoneConnectionConfigurationsList <a name="DataAwsccDatazoneConnectionConfigurationsList" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionConfigurationsList;

new DataAwsccDatazoneConnectionConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.get"></a>

```java
public DataAwsccDatazoneConnectionConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccDatazoneConnectionConfigurationsOutputReference <a name="DataAwsccDatazoneConnectionConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionConfigurationsOutputReference;

new DataAwsccDatazoneConnectionConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.classification">classification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.properties">properties</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations">DataAwsccDatazoneConnectionConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.properties"></a>

```java
public StringMap getProperties();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations">DataAwsccDatazoneConnectionConfigurations</a>

---


### DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode">authMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn">profileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties">DataAwsccDatazoneConnectionPropsAmazonQProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authMode`<sup>Required</sup> <a name="authMode" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode"></a>

```java
public java.lang.String getAuthMode();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `profileArn`<sup>Required</sup> <a name="profileArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn"></a>

```java
public java.lang.String getProfileArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsAmazonQProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties">DataAwsccDatazoneConnectionPropsAmazonQProperties</a>

---


### DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties">DataAwsccDatazoneConnectionPropsAthenaProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsAthenaProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties">DataAwsccDatazoneConnectionPropsAthenaProperties</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference;

new DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">authorizationCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationCode`<sup>Required</sup> <a name="authorizationCode" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```java
public java.lang.String getAuthorizationCode();
```

- *Type:* java.lang.String

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference;

new DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">awsManagedClientApplicationReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">userManagedClientApplicationClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsManagedClientApplicationReference`<sup>Required</sup> <a name="awsManagedClientApplicationReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```java
public java.lang.String getAwsManagedClientApplicationReference();
```

- *Type:* java.lang.String

---

##### `userManagedClientApplicationClientId`<sup>Required</sup> <a name="userManagedClientApplicationClientId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```java
public java.lang.String getUserManagedClientApplicationClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference;

new DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken">jwtToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken">refreshToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">userManagedClientApplicationClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `jwtToken`<sup>Required</sup> <a name="jwtToken" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken"></a>

```java
public java.lang.String getJwtToken();
```

- *Type:* java.lang.String

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken"></a>

```java
public java.lang.String getRefreshToken();
```

- *Type:* java.lang.String

---

##### `userManagedClientApplicationClientSecret`<sup>Required</sup> <a name="userManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```java
public java.lang.String getUserManagedClientApplicationClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties">authorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication">oAuth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials">oAuth2Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType">oAuth2GrantType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap">tokenUrlParametersMap</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationCodeProperties`<sup>Required</sup> <a name="authorizationCodeProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference getAuthorizationCodeProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `oAuth2ClientApplication`<sup>Required</sup> <a name="oAuth2ClientApplication" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference getOAuth2ClientApplication();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a>

---

##### `oAuth2Credentials`<sup>Required</sup> <a name="oAuth2Credentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference getOAuth2Credentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a>

---

##### `oAuth2GrantType`<sup>Required</sup> <a name="oAuth2GrantType" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType"></a>

```java
public java.lang.String getOAuth2GrantType();
```

- *Type:* java.lang.String

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

---

##### `tokenUrlParametersMap`<sup>Required</sup> <a name="tokenUrlParametersMap" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```java
public StringMap getTokenUrlParametersMap();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference;

new DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">basicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">customAuthenticationCredentials</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties">oAuth2Properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `basicAuthenticationCredentials`<sup>Required</sup> <a name="basicAuthenticationCredentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference getBasicAuthenticationCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `customAuthenticationCredentials`<sup>Required</sup> <a name="customAuthenticationCredentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```java
public StringMap getCustomAuthenticationCredentials();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `oAuth2Properties`<sup>Required</sup> <a name="oAuth2Properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference getOAuth2Properties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a>

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference;

new DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties">athenaProperties</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties">connectionProperties</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria">matchCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements">physicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties">pythonProperties</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties">sparkProperties</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials">validateCredentials</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments">validateForComputeEnvironments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `athenaProperties`<sup>Required</sup> <a name="athenaProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties"></a>

```java
public StringMap getAthenaProperties();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference getAuthenticationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a>

---

##### `connectionProperties`<sup>Required</sup> <a name="connectionProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties"></a>

```java
public StringMap getConnectionProperties();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `matchCriteria`<sup>Required</sup> <a name="matchCriteria" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria"></a>

```java
public java.lang.String getMatchCriteria();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `physicalConnectionRequirements`<sup>Required</sup> <a name="physicalConnectionRequirements" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference getPhysicalConnectionRequirements();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a>

---

##### `pythonProperties`<sup>Required</sup> <a name="pythonProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties"></a>

```java
public StringMap getPythonProperties();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `sparkProperties`<sup>Required</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties"></a>

```java
public StringMap getSparkProperties();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `validateCredentials`<sup>Required</sup> <a name="validateCredentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials"></a>

```java
public IResolvable getValidateCredentials();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `validateForComputeEnvironments`<sup>Required</sup> <a name="validateForComputeEnvironments" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments"></a>

```java
public java.util.List<java.lang.String> getValidateForComputeEnvironments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference;

new DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">securityGroupIdList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList">subnetIdList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `securityGroupIdList`<sup>Required</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `subnetIdList`<sup>Required</sup> <a name="subnetIdList" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList"></a>

```java
public java.util.List<java.lang.String> getSubnetIdList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput">glueConnectionInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties">DataAwsccDatazoneConnectionPropsGlueProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `glueConnectionInput`<sup>Required</sup> <a name="glueConnectionInput" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference getGlueConnectionInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsGlueProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties">DataAwsccDatazoneConnectionPropsGlueProperties</a>

---


### DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties">DataAwsccDatazoneConnectionPropsHyperPodProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsHyperPodProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties">DataAwsccDatazoneConnectionPropsHyperPodProperties</a>

---


### DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled">glueLineageSyncEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties">DataAwsccDatazoneConnectionPropsIamProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `glueLineageSyncEnabled`<sup>Required</sup> <a name="glueLineageSyncEnabled" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```java
public IResolvable getGlueLineageSyncEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsIamProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties">DataAwsccDatazoneConnectionPropsIamProperties</a>

---


### DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled">glueLineageSyncEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties">DataAwsccDatazoneConnectionPropsLakehouseProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `glueLineageSyncEnabled`<sup>Required</sup> <a name="glueLineageSyncEnabled" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```java
public IResolvable getGlueLineageSyncEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsLakehouseProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties">DataAwsccDatazoneConnectionPropsLakehouseProperties</a>

---


### DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn">trackingServerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties">DataAwsccDatazoneConnectionPropsMlflowProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trackingServerArn`<sup>Required</sup> <a name="trackingServerArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn"></a>

```java
public java.lang.String getTrackingServerArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsMlflowProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties">DataAwsccDatazoneConnectionPropsMlflowProperties</a>

---


### DataAwsccDatazoneConnectionPropsOutputReference <a name="DataAwsccDatazoneConnectionPropsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsOutputReference;

new DataAwsccDatazoneConnectionPropsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.amazonQProperties">amazonQProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference">DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.athenaProperties">athenaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference">DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.glueProperties">glueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.hyperPodProperties">hyperPodProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference">DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.iamProperties">iamProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference">DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.lakehouseProperties">lakehouseProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference">DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.mlflowProperties">mlflowProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference">DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.redshiftProperties">redshiftProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.s3Properties">s3Properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference">DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.sparkEmrProperties">sparkEmrProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference">DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.sparkGlueProperties">sparkGlueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference">DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties">workflowsMwaaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties">workflowsServerlessProperties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps">DataAwsccDatazoneConnectionProps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amazonQProperties`<sup>Required</sup> <a name="amazonQProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.amazonQProperties"></a>

```java
public DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference getAmazonQProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference">DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference</a>

---

##### `athenaProperties`<sup>Required</sup> <a name="athenaProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.athenaProperties"></a>

```java
public DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference getAthenaProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference">DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference</a>

---

##### `glueProperties`<sup>Required</sup> <a name="glueProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.glueProperties"></a>

```java
public DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference getGlueProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference</a>

---

##### `hyperPodProperties`<sup>Required</sup> <a name="hyperPodProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.hyperPodProperties"></a>

```java
public DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference getHyperPodProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference">DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference</a>

---

##### `iamProperties`<sup>Required</sup> <a name="iamProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.iamProperties"></a>

```java
public DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference getIamProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference">DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference</a>

---

##### `lakehouseProperties`<sup>Required</sup> <a name="lakehouseProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.lakehouseProperties"></a>

```java
public DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference getLakehouseProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference">DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference</a>

---

##### `mlflowProperties`<sup>Required</sup> <a name="mlflowProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.mlflowProperties"></a>

```java
public DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference getMlflowProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference">DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference</a>

---

##### `redshiftProperties`<sup>Required</sup> <a name="redshiftProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.redshiftProperties"></a>

```java
public DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference getRedshiftProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference</a>

---

##### `s3Properties`<sup>Required</sup> <a name="s3Properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.s3Properties"></a>

```java
public DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference getS3Properties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference">DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference</a>

---

##### `sparkEmrProperties`<sup>Required</sup> <a name="sparkEmrProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.sparkEmrProperties"></a>

```java
public DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference getSparkEmrProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference">DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference</a>

---

##### `sparkGlueProperties`<sup>Required</sup> <a name="sparkGlueProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.sparkGlueProperties"></a>

```java
public DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference getSparkGlueProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference">DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference</a>

---

##### `workflowsMwaaProperties`<sup>Required</sup> <a name="workflowsMwaaProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties"></a>

```java
public DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference getWorkflowsMwaaProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a>

---

##### `workflowsServerlessProperties`<sup>Required</sup> <a name="workflowsServerlessProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties"></a>

```java
public java.lang.String getWorkflowsServerlessProperties();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionProps getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps">DataAwsccDatazoneConnectionProps</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference;

new DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword">usernamePassword</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `usernamePassword`<sup>Required</sup> <a name="usernamePassword" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword"></a>

```java
public DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference getUsernamePassword();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference;

new DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference;

new DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule"></a>

```java
public DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference;

new DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync">lineageSync</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties">DataAwsccDatazoneConnectionPropsRedshiftProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials"></a>

```java
public DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `lineageSync`<sup>Required</sup> <a name="lineageSync" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync"></a>

```java
public DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference getLineageSync();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage"></a>

```java
public DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference getStorage();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsRedshiftProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties">DataAwsccDatazoneConnectionPropsRedshiftProperties</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference;

new DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage">DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage">DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage</a>

---


### DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation">registerS3AccessGrantLocation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId">s3AccessGrantLocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties">DataAwsccDatazoneConnectionPropsS3Properties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `registerS3AccessGrantLocation`<sup>Required</sup> <a name="registerS3AccessGrantLocation" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation"></a>

```java
public IResolvable getRegisterS3AccessGrantLocation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `s3AccessGrantLocationId`<sup>Required</sup> <a name="s3AccessGrantLocationId" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId"></a>

```java
public java.lang.String getS3AccessGrantLocationId();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsS3Properties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties">DataAwsccDatazoneConnectionPropsS3Properties</a>

---


### DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn">computeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv">javaVirtualEnv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri">logUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn">managedEndpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv">pythonVirtualEnv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole">runtimeRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri">trustedCertificatesS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties">DataAwsccDatazoneConnectionPropsSparkEmrProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeArn`<sup>Required</sup> <a name="computeArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn"></a>

```java
public java.lang.String getComputeArn();
```

- *Type:* java.lang.String

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `javaVirtualEnv`<sup>Required</sup> <a name="javaVirtualEnv" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv"></a>

```java
public java.lang.String getJavaVirtualEnv();
```

- *Type:* java.lang.String

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

---

##### `managedEndpointArn`<sup>Required</sup> <a name="managedEndpointArn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn"></a>

```java
public java.lang.String getManagedEndpointArn();
```

- *Type:* java.lang.String

---

##### `pythonVirtualEnv`<sup>Required</sup> <a name="pythonVirtualEnv" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv"></a>

```java
public java.lang.String getPythonVirtualEnv();
```

- *Type:* java.lang.String

---

##### `runtimeRole`<sup>Required</sup> <a name="runtimeRole" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole"></a>

```java
public java.lang.String getRuntimeRole();
```

- *Type:* java.lang.String

---

##### `trustedCertificatesS3Uri`<sup>Required</sup> <a name="trustedCertificatesS3Uri" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri"></a>

```java
public java.lang.String getTrustedCertificatesS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsSparkEmrProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties">DataAwsccDatazoneConnectionPropsSparkEmrProperties</a>

---


### DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference <a name="DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference;

new DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection">connection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection"></a>

```java
public java.lang.String getConnection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---


### DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs">additionalArgs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName">glueConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv">javaVirtualEnv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv">pythonVirtualEnv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType">workerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties">DataAwsccDatazoneConnectionPropsSparkGlueProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalArgs`<sup>Required</sup> <a name="additionalArgs" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs"></a>

```java
public DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference getAdditionalArgs();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a>

---

##### `glueConnectionName`<sup>Required</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName"></a>

```java
public java.lang.String getGlueConnectionName();
```

- *Type:* java.lang.String

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion"></a>

```java
public java.lang.String getGlueVersion();
```

- *Type:* java.lang.String

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

---

##### `javaVirtualEnv`<sup>Required</sup> <a name="javaVirtualEnv" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv"></a>

```java
public java.lang.String getJavaVirtualEnv();
```

- *Type:* java.lang.String

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers"></a>

```java
public java.lang.Number getNumberOfWorkers();
```

- *Type:* java.lang.Number

---

##### `pythonVirtualEnv`<sup>Required</sup> <a name="pythonVirtualEnv" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv"></a>

```java
public java.lang.String getPythonVirtualEnv();
```

- *Type:* java.lang.String

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsSparkGlueProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties">DataAwsccDatazoneConnectionPropsSparkGlueProperties</a>

---


### DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_datazone_connection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference;

new DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName">mwaaEnvironmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties">DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mwaaEnvironmentName`<sup>Required</sup> <a name="mwaaEnvironmentName" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName"></a>

```java
public java.lang.String getMwaaEnvironmentName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties">DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties</a>

---



