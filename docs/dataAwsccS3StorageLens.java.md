# `dataAwsccS3StorageLens` Submodule <a name="`dataAwsccS3StorageLens` Submodule" id="@cdktn/provider-awscc.dataAwsccS3StorageLens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3StorageLens <a name="DataAwsccS3StorageLens" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3_storage_lens awscc_s3_storage_lens}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLens;

DataAwsccS3StorageLens.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3_storage_lens#id DataAwsccS3StorageLens#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3StorageLens resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLens;

DataAwsccS3StorageLens.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLens;

DataAwsccS3StorageLens.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLens;

DataAwsccS3StorageLens.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLens;

DataAwsccS3StorageLens.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccS3StorageLens.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccS3StorageLens resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccS3StorageLens to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccS3StorageLens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3_storage_lens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3StorageLens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.storageLensConfiguration">storageLensConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList">DataAwsccS3StorageLensTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `storageLensConfiguration`<sup>Required</sup> <a name="storageLensConfiguration" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.storageLensConfiguration"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationOutputReference getStorageLensConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.tags"></a>

```java
public DataAwsccS3StorageLensTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList">DataAwsccS3StorageLensTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3StorageLensConfig <a name="DataAwsccS3StorageLensConfig" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensConfig;

DataAwsccS3StorageLensConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/s3_storage_lens#id DataAwsccS3StorageLens#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3StorageLensStorageLensConfiguration <a name="DataAwsccS3StorageLensStorageLensConfiguration" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfiguration;

DataAwsccS3StorageLensStorageLensConfiguration.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevel <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevel.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevel;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevel.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria;

DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationAwsOrg <a name="DataAwsccS3StorageLensStorageLensConfigurationAwsOrg" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrg"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrg.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrg;

DataAwsccS3StorageLensStorageLensConfigurationAwsOrg.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExport <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExport" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExport.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExport;

DataAwsccS3StorageLensStorageLensConfigurationDataExport.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics;

DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination;

DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption;

DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms;

DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination;

DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption;

DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms;

DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationExclude <a name="DataAwsccS3StorageLensStorageLensConfigurationExclude" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExclude.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExclude;

DataAwsccS3StorageLensStorageLensConfigurationExclude.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport;

DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination;

DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption;

DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms;

DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination;

DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption;

DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms;

DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms.builder()
    .build();
```


### DataAwsccS3StorageLensStorageLensConfigurationInclude <a name="DataAwsccS3StorageLensStorageLensConfigurationInclude" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationInclude.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationInclude;

DataAwsccS3StorageLensStorageLensConfigurationInclude.builder()
    .build();
```


### DataAwsccS3StorageLensTags <a name="DataAwsccS3StorageLensTags" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensTags;

DataAwsccS3StorageLensTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetrics">activityMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetrics">advancedCostOptimizationMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetrics">advancedDataProtectionMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetrics">advancedPerformanceMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetrics">detailedStatusCodesMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevel">prefixLevel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activityMetrics`<sup>Required</sup> <a name="activityMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetrics"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference getActivityMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference</a>

---

##### `advancedCostOptimizationMetrics`<sup>Required</sup> <a name="advancedCostOptimizationMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetrics"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference getAdvancedCostOptimizationMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference</a>

---

##### `advancedDataProtectionMetrics`<sup>Required</sup> <a name="advancedDataProtectionMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetrics"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference getAdvancedDataProtectionMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference</a>

---

##### `advancedPerformanceMetrics`<sup>Required</sup> <a name="advancedPerformanceMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetrics"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference getAdvancedPerformanceMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference</a>

---

##### `detailedStatusCodesMetrics`<sup>Required</sup> <a name="detailedStatusCodesMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetrics"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference getDetailedStatusCodesMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference</a>

---

##### `prefixLevel`<sup>Required</sup> <a name="prefixLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevel"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference getPrefixLevel();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetrics">storageMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageMetrics`<sup>Required</sup> <a name="storageMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetrics"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference getStorageMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteria">selectionCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `selectionCriteria`<sup>Required</sup> <a name="selectionCriteria" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteria"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference getSelectionCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepth">maxDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentage">minStorageBytesPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `maxDepth`<sup>Required</sup> <a name="maxDepth" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepth"></a>

```java
public java.lang.Number getMaxDepth();
```

- *Type:* java.lang.Number

---

##### `minStorageBytesPercentage`<sup>Required</sup> <a name="minStorageBytesPercentage" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentage"></a>

```java
public java.lang.Number getMinStorageBytesPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetrics">activityMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetrics">advancedCostOptimizationMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetrics">advancedDataProtectionMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetrics">advancedPerformanceMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevel">bucketLevel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetrics">detailedStatusCodesMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevel">storageLensGroupLevel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activityMetrics`<sup>Required</sup> <a name="activityMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetrics"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference getActivityMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference</a>

---

##### `advancedCostOptimizationMetrics`<sup>Required</sup> <a name="advancedCostOptimizationMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetrics"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference getAdvancedCostOptimizationMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference</a>

---

##### `advancedDataProtectionMetrics`<sup>Required</sup> <a name="advancedDataProtectionMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetrics"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference getAdvancedDataProtectionMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference</a>

---

##### `advancedPerformanceMetrics`<sup>Required</sup> <a name="advancedPerformanceMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetrics"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference getAdvancedPerformanceMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference</a>

---

##### `bucketLevel`<sup>Required</sup> <a name="bucketLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevel"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference getBucketLevel();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference</a>

---

##### `detailedStatusCodesMetrics`<sup>Required</sup> <a name="detailedStatusCodesMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetrics"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference getDetailedStatusCodesMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference</a>

---

##### `storageLensGroupLevel`<sup>Required</sup> <a name="storageLensGroupLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevel"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference getStorageLensGroupLevel();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevel getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevel</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteria">storageLensGroupSelectionCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageLensGroupSelectionCriteria`<sup>Required</sup> <a name="storageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteria"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference getStorageLensGroupSelectionCriteria();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrg">DataAwsccS3StorageLensStorageLensConfigurationAwsOrg</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAwsOrg getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrg">DataAwsccS3StorageLensStorageLensConfigurationAwsOrg</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetrics">cloudwatchMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestination">s3BucketDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestination">storageLensTableDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExport">DataAwsccS3StorageLensStorageLensConfigurationDataExport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchMetrics`<sup>Required</sup> <a name="cloudwatchMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetrics"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference getCloudwatchMetrics();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference</a>

---

##### `s3BucketDestination`<sup>Required</sup> <a name="s3BucketDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestination"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference getS3BucketDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference</a>

---

##### `storageLensTableDestination`<sup>Required</sup> <a name="storageLensTableDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestination"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference getStorageLensTableDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExport getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExport">DataAwsccS3StorageLensStorageLensConfigurationDataExport</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3">sses3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ssekms`<sup>Required</sup> <a name="ssekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference getSsekms();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a>

---

##### `sses3`<sup>Required</sup> <a name="sses3" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3"></a>

```java
public java.lang.String getSses3();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion">outputSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryption"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `outputSchemaVersion`<sup>Required</sup> <a name="outputSchemaVersion" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion"></a>

```java
public java.lang.String getOutputSchemaVersion();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3">sses3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ssekms`<sup>Required</sup> <a name="ssekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference getSsekms();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a>

---

##### `sses3`<sup>Required</sup> <a name="sses3" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3"></a>

```java
public java.lang.String getSses3();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryption"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.buckets">buckets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExclude">DataAwsccS3StorageLensStorageLensConfigurationExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.buckets"></a>

```java
public java.util.List<java.lang.String> getBuckets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExclude getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExclude">DataAwsccS3StorageLensStorageLensConfigurationExclude</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestination">s3BucketDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestination">storageLensTableDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketDestination`<sup>Required</sup> <a name="s3BucketDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestination"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference getS3BucketDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference</a>

---

##### `storageLensTableDestination`<sup>Required</sup> <a name="storageLensTableDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestination"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference getStorageLensTableDestination();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3">sses3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ssekms`<sup>Required</sup> <a name="ssekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference getSsekms();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a>

---

##### `sses3`<sup>Required</sup> <a name="sses3" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3"></a>

```java
public java.lang.String getSses3();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion">outputSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryption"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `outputSchemaVersion`<sup>Required</sup> <a name="outputSchemaVersion" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion"></a>

```java
public java.lang.String getOutputSchemaVersion();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms">ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3">sses3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ssekms`<sup>Required</sup> <a name="ssekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference getSsekms();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a>

---

##### `sses3`<sup>Required</sup> <a name="sses3" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3"></a>

```java
public java.lang.String getSses3();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryption"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.buckets">buckets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationInclude">DataAwsccS3StorageLensStorageLensConfigurationInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.buckets"></a>

```java
public java.util.List<java.lang.String> getBuckets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationInclude getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationInclude">DataAwsccS3StorageLensStorageLensConfigurationInclude</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference;

new DataAwsccS3StorageLensStorageLensConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.accountLevel">accountLevel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.awsOrg">awsOrg</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.dataExport">dataExport</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExport">expandedPrefixesDataExport</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.include">include</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference">DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiter">prefixDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.storageLensArn">storageLensArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfiguration">DataAwsccS3StorageLensStorageLensConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountLevel`<sup>Required</sup> <a name="accountLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.accountLevel"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference getAccountLevel();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference</a>

---

##### `awsOrg`<sup>Required</sup> <a name="awsOrg" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.awsOrg"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference getAwsOrg();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference</a>

---

##### `dataExport`<sup>Required</sup> <a name="dataExport" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.dataExport"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference getDataExport();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference</a>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.exclude"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference getExclude();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference</a>

---

##### `expandedPrefixesDataExport`<sup>Required</sup> <a name="expandedPrefixesDataExport" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExport"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference getExpandedPrefixesDataExport();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.include"></a>

```java
public DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference getInclude();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference">DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference</a>

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `prefixDelimiter`<sup>Required</sup> <a name="prefixDelimiter" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiter"></a>

```java
public java.lang.String getPrefixDelimiter();
```

- *Type:* java.lang.String

---

##### `storageLensArn`<sup>Required</sup> <a name="storageLensArn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.storageLensArn"></a>

```java
public java.lang.String getStorageLensArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensStorageLensConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfiguration">DataAwsccS3StorageLensStorageLensConfiguration</a>

---


### DataAwsccS3StorageLensTagsList <a name="DataAwsccS3StorageLensTagsList" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensTagsList;

new DataAwsccS3StorageLensTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.get"></a>

```java
public DataAwsccS3StorageLensTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccS3StorageLensTagsOutputReference <a name="DataAwsccS3StorageLensTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_s3_storage_lens.DataAwsccS3StorageLensTagsOutputReference;

new DataAwsccS3StorageLensTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTags">DataAwsccS3StorageLensTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccS3StorageLensTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTags">DataAwsccS3StorageLensTags</a>

---



