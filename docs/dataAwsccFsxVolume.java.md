# `dataAwsccFsxVolume` Submodule <a name="`dataAwsccFsxVolume` Submodule" id="@cdktn/provider-awscc.dataAwsccFsxVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFsxVolume <a name="DataAwsccFsxVolume" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume awscc_fsx_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolume;

DataAwsccFsxVolume.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume#id DataAwsccFsxVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccFsxVolume resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolume;

DataAwsccFsxVolume.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolume;

DataAwsccFsxVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolume;

DataAwsccFsxVolume.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolume;

DataAwsccFsxVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccFsxVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccFsxVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccFsxVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccFsxVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFsxVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.ontapConfiguration">ontapConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.openZfsConfiguration">openZfsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference">DataAwsccFsxVolumeOpenZfsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList">DataAwsccFsxVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ontapConfiguration`<sup>Required</sup> <a name="ontapConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.ontapConfiguration"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationOutputReference getOntapConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationOutputReference</a>

---

##### `openZfsConfiguration`<sup>Required</sup> <a name="openZfsConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.openZfsConfiguration"></a>

```java
public DataAwsccFsxVolumeOpenZfsConfigurationOutputReference getOpenZfsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference">DataAwsccFsxVolumeOpenZfsConfigurationOutputReference</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.tags"></a>

```java
public DataAwsccFsxVolumeTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList">DataAwsccFsxVolumeTagsList</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFsxVolumeConfig <a name="DataAwsccFsxVolumeConfig" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeConfig;

DataAwsccFsxVolumeConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume#id DataAwsccFsxVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFsxVolumeOntapConfiguration <a name="DataAwsccFsxVolumeOntapConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfiguration;

DataAwsccFsxVolumeOntapConfiguration.builder()
    .build();
```


### DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration <a name="DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration;

DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration.builder()
    .build();
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration;

DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration.builder()
    .build();
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod;

DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.builder()
    .build();
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod;

DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.builder()
    .build();
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention;

DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.builder()
    .build();
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention;

DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.builder()
    .build();
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention;

DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.builder()
    .build();
```


### DataAwsccFsxVolumeOntapConfigurationTieringPolicy <a name="DataAwsccFsxVolumeOntapConfigurationTieringPolicy" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy;

DataAwsccFsxVolumeOntapConfigurationTieringPolicy.builder()
    .build();
```


### DataAwsccFsxVolumeOpenZfsConfiguration <a name="DataAwsccFsxVolumeOpenZfsConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOpenZfsConfiguration;

DataAwsccFsxVolumeOpenZfsConfiguration.builder()
    .build();
```


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExports <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExports" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports;

DataAwsccFsxVolumeOpenZfsConfigurationNfsExports.builder()
    .build();
```


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations;

DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.builder()
    .build();
```


### DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot <a name="DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot;

DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot.builder()
    .build();
```


### DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas <a name="DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas;

DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas.builder()
    .build();
```


### DataAwsccFsxVolumeTags <a name="DataAwsccFsxVolumeTags" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeTags;

DataAwsccFsxVolumeTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference;

new DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates">aggregates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate">constituentsPerAggregate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration">DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregates`<sup>Required</sup> <a name="aggregates" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates"></a>

```java
public java.util.List<java.lang.String> getAggregates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `constituentsPerAggregate`<sup>Required</sup> <a name="constituentsPerAggregate" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate"></a>

```java
public java.lang.Number getConstituentsPerAggregate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration">DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration</a>

---


### DataAwsccFsxVolumeOntapConfigurationOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationOutputReference;

new DataAwsccFsxVolumeOntapConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration">aggregateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.junctionPath">junctionPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType">ontapVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.sizeInBytes">sizeInBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes">sizeInMegabytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration">snaplockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy">snapshotPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled">storageEfficiencyEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId">storageVirtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference">DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.volumeStyle">volumeStyle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration">DataAwsccFsxVolumeOntapConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregateConfiguration`<sup>Required</sup> <a name="aggregateConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference getAggregateConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a>

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="copyTagsToBackups" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups"></a>

```java
public java.lang.String getCopyTagsToBackups();
```

- *Type:* java.lang.String

---

##### `junctionPath`<sup>Required</sup> <a name="junctionPath" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.junctionPath"></a>

```java
public java.lang.String getJunctionPath();
```

- *Type:* java.lang.String

---

##### `ontapVolumeType`<sup>Required</sup> <a name="ontapVolumeType" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType"></a>

```java
public java.lang.String getOntapVolumeType();
```

- *Type:* java.lang.String

---

##### `securityStyle`<sup>Required</sup> <a name="securityStyle" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.securityStyle"></a>

```java
public java.lang.String getSecurityStyle();
```

- *Type:* java.lang.String

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.sizeInBytes"></a>

```java
public java.lang.String getSizeInBytes();
```

- *Type:* java.lang.String

---

##### `sizeInMegabytes`<sup>Required</sup> <a name="sizeInMegabytes" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes"></a>

```java
public java.lang.String getSizeInMegabytes();
```

- *Type:* java.lang.String

---

##### `snaplockConfiguration`<sup>Required</sup> <a name="snaplockConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference getSnaplockConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a>

---

##### `snapshotPolicy`<sup>Required</sup> <a name="snapshotPolicy" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy"></a>

```java
public java.lang.String getSnapshotPolicy();
```

- *Type:* java.lang.String

---

##### `storageEfficiencyEnabled`<sup>Required</sup> <a name="storageEfficiencyEnabled" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled"></a>

```java
public java.lang.String getStorageEfficiencyEnabled();
```

- *Type:* java.lang.String

---

##### `storageVirtualMachineId`<sup>Required</sup> <a name="storageVirtualMachineId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId"></a>

```java
public java.lang.String getStorageVirtualMachineId();
```

- *Type:* java.lang.String

---

##### `tieringPolicy`<sup>Required</sup> <a name="tieringPolicy" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.tieringPolicy"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference getTieringPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference">DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference</a>

---

##### `volumeStyle`<sup>Required</sup> <a name="volumeStyle" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.volumeStyle"></a>

```java
public java.lang.String getVolumeStyle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOntapConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration">DataAwsccFsxVolumeOntapConfiguration</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference;

new DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference;

new DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume">auditLogVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod">autocommitPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete">privilegedDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType">snaplockType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled">volumeAppendModeEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration">DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditLogVolume`<sup>Required</sup> <a name="auditLogVolume" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume"></a>

```java
public java.lang.String getAuditLogVolume();
```

- *Type:* java.lang.String

---

##### `autocommitPeriod`<sup>Required</sup> <a name="autocommitPeriod" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference getAutocommitPeriod();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a>

---

##### `privilegedDelete`<sup>Required</sup> <a name="privilegedDelete" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete"></a>

```java
public java.lang.String getPrivilegedDelete();
```

- *Type:* java.lang.String

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference getRetentionPeriod();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a>

---

##### `snaplockType`<sup>Required</sup> <a name="snaplockType" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType"></a>

```java
public java.lang.String getSnaplockType();
```

- *Type:* java.lang.String

---

##### `volumeAppendModeEnabled`<sup>Required</sup> <a name="volumeAppendModeEnabled" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled"></a>

```java
public java.lang.String getVolumeAppendModeEnabled();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration">DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference;

new DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference;

new DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference;

new DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference;

new DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention">defaultRetention</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention">maximumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention">minimumRetention</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultRetention`<sup>Required</sup> <a name="defaultRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference getDefaultRetention();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a>

---

##### `maximumRetention`<sup>Required</sup> <a name="maximumRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference getMaximumRetention();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a>

---

##### `minimumRetention`<sup>Required</sup> <a name="minimumRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference getMinimumRetention();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

---


### DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference;

new DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod">coolingPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy">DataAwsccFsxVolumeOntapConfigurationTieringPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coolingPeriod`<sup>Required</sup> <a name="coolingPeriod" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod"></a>

```java
public java.lang.Number getCoolingPeriod();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOntapConfigurationTieringPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy">DataAwsccFsxVolumeOntapConfigurationTieringPolicy</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList;

new DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get"></a>

```java
public DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference;

new DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients">clients</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```java
public java.lang.String getClients();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList;

new DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.get"></a>

```java
public DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference;

new DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations">clientConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports">DataAwsccFsxVolumeOpenZfsConfigurationNfsExports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientConfigurations`<sup>Required</sup> <a name="clientConfigurations" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations"></a>

```java
public DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList getClientConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOpenZfsConfigurationNfsExports getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports">DataAwsccFsxVolumeOpenZfsConfigurationNfsExports</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference;

new DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy">copyStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn">snapshotArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot">DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `copyStrategy`<sup>Required</sup> <a name="copyStrategy" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy"></a>

```java
public java.lang.String getCopyStrategy();
```

- *Type:* java.lang.String

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn"></a>

```java
public java.lang.String getSnapshotArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot">DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference;

new DataAwsccFsxVolumeOpenZfsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots">copyTagsToSnapshots</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType">dataCompressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports">nfsExports</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot">originSnapshot</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId">parentVolumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.readOnly">readOnly</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB">recordSizeKiB</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB">storageCapacityQuotaGiB</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB">storageCapacityReservationGiB</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas">userAndGroupQuotas</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration">DataAwsccFsxVolumeOpenZfsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `copyTagsToSnapshots`<sup>Required</sup> <a name="copyTagsToSnapshots" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots"></a>

```java
public IResolvable getCopyTagsToSnapshots();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `dataCompressionType`<sup>Required</sup> <a name="dataCompressionType" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType"></a>

```java
public java.lang.String getDataCompressionType();
```

- *Type:* java.lang.String

---

##### `nfsExports`<sup>Required</sup> <a name="nfsExports" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports"></a>

```java
public DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList getNfsExports();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `originSnapshot`<sup>Required</sup> <a name="originSnapshot" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot"></a>

```java
public DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference getOriginSnapshot();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a>

---

##### `parentVolumeId`<sup>Required</sup> <a name="parentVolumeId" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId"></a>

```java
public java.lang.String getParentVolumeId();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.readOnly"></a>

```java
public IResolvable getReadOnly();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `recordSizeKiB`<sup>Required</sup> <a name="recordSizeKiB" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB"></a>

```java
public java.lang.Number getRecordSizeKiB();
```

- *Type:* java.lang.Number

---

##### `storageCapacityQuotaGiB`<sup>Required</sup> <a name="storageCapacityQuotaGiB" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB"></a>

```java
public java.lang.Number getStorageCapacityQuotaGiB();
```

- *Type:* java.lang.Number

---

##### `storageCapacityReservationGiB`<sup>Required</sup> <a name="storageCapacityReservationGiB" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB"></a>

```java
public java.lang.Number getStorageCapacityReservationGiB();
```

- *Type:* java.lang.Number

---

##### `userAndGroupQuotas`<sup>Required</sup> <a name="userAndGroupQuotas" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas"></a>

```java
public DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList getUserAndGroupQuotas();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOpenZfsConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration">DataAwsccFsxVolumeOpenZfsConfiguration</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList <a name="DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList;

new DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get"></a>

```java
public DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference;

new DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB">storageCapacityQuotaGiB</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas">DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `storageCapacityQuotaGiB`<sup>Required</sup> <a name="storageCapacityQuotaGiB" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB"></a>

```java
public java.lang.Number getStorageCapacityQuotaGiB();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas">DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>

---


### DataAwsccFsxVolumeTagsList <a name="DataAwsccFsxVolumeTagsList" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeTagsList;

new DataAwsccFsxVolumeTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.get"></a>

```java
public DataAwsccFsxVolumeTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccFsxVolumeTagsOutputReference <a name="DataAwsccFsxVolumeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_fsx_volume.DataAwsccFsxVolumeTagsOutputReference;

new DataAwsccFsxVolumeTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTags">DataAwsccFsxVolumeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccFsxVolumeTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTags">DataAwsccFsxVolumeTags</a>

---



