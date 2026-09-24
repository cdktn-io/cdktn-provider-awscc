# `dataAwsccGluePartition` Submodule <a name="`dataAwsccGluePartition` Submodule" id="@cdktn/provider-awscc.dataAwsccGluePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGluePartition <a name="DataAwsccGluePartition" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/glue_partition awscc_glue_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartition;

DataAwsccGluePartition.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/glue_partition#id DataAwsccGluePartition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGluePartition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartition;

DataAwsccGluePartition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartition;

DataAwsccGluePartition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartition;

DataAwsccGluePartition.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartition;

DataAwsccGluePartition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccGluePartition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccGluePartition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccGluePartition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccGluePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/glue_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGluePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.identifierPartitionInputValues">identifierPartitionInputValues</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.partitionInput">partitionInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference">DataAwsccGluePartitionPartitionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `identifierPartitionInputValues`<sup>Required</sup> <a name="identifierPartitionInputValues" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.identifierPartitionInputValues"></a>

```java
public java.lang.String getIdentifierPartitionInputValues();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Required</sup> <a name="partitionInput" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.partitionInput"></a>

```java
public DataAwsccGluePartitionPartitionInputOutputReference getPartitionInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference">DataAwsccGluePartitionPartitionInputOutputReference</a>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGluePartitionConfig <a name="DataAwsccGluePartitionConfig" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionConfig;

DataAwsccGluePartitionConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/glue_partition#id DataAwsccGluePartition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGluePartitionPartitionInput <a name="DataAwsccGluePartitionPartitionInput" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInput;

DataAwsccGluePartitionPartitionInput.builder()
    .build();
```


### DataAwsccGluePartitionPartitionInputStorageDescriptor <a name="DataAwsccGluePartitionPartitionInputStorageDescriptor" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptor.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptor;

DataAwsccGluePartitionPartitionInputStorageDescriptor.builder()
    .build();
```


### DataAwsccGluePartitionPartitionInputStorageDescriptorColumns <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorColumns" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumns;

DataAwsccGluePartitionPartitionInputStorageDescriptorColumns.builder()
    .build();
```


### DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference;

DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference.builder()
    .build();
```


### DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId;

DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.builder()
    .build();
```


### DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo;

DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo.builder()
    .build();
```


### DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo;

DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo.builder()
    .build();
```


### DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns;

DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGluePartitionPartitionInputOutputReference <a name="DataAwsccGluePartitionPartitionInputOutputReference" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputOutputReference;

new DataAwsccGluePartitionPartitionInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference">DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInput">DataAwsccGluePartitionPartitionInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `storageDescriptor`<sup>Required</sup> <a name="storageDescriptor" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.property.storageDescriptor"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference getStorageDescriptor();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference">DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputOutputReference.property.internalValue"></a>

```java
public DataAwsccGluePartitionPartitionInput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInput">DataAwsccGluePartitionPartitionInput</a>

---


### DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList;

new DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.get"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference;

new DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumns">DataAwsccGluePartitionPartitionInputStorageDescriptorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorColumns getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumns">DataAwsccGluePartitionPartitionInputStorageDescriptorColumns</a>

---


### DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference;

new DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumns">bucketColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList">DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormat">inputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBuckets">numberOfBuckets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReference">schemaReference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference">DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfo">serdeInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference">DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference">DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumns">sortColumns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList">DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectories">storedAsSubDirectories</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptor">DataAwsccGluePartitionPartitionInputStorageDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketColumns`<sup>Required</sup> <a name="bucketColumns" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumns"></a>

```java
public java.util.List<java.lang.String> getBucketColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.columns"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList getColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList">DataAwsccGluePartitionPartitionInputStorageDescriptorColumnsList</a>

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.compressed"></a>

```java
public IResolvable getCompressed();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormat"></a>

```java
public java.lang.String getInputFormat();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `numberOfBuckets`<sup>Required</sup> <a name="numberOfBuckets" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```java
public java.lang.Number getNumberOfBuckets();
```

- *Type:* java.lang.Number

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `schemaReference`<sup>Required</sup> <a name="schemaReference" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReference"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference getSchemaReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference">DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `serdeInfo`<sup>Required</sup> <a name="serdeInfo" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfo"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference getSerdeInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference">DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference</a>

---

##### `skewedInfo`<sup>Required</sup> <a name="skewedInfo" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfo"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference getSkewedInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference">DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sortColumns`<sup>Required</sup> <a name="sortColumns" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumns"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList getSortColumns();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList">DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList</a>

---

##### `storedAsSubDirectories`<sup>Required</sup> <a name="storedAsSubDirectories" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```java
public IResolvable getStoredAsSubDirectories();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorOutputReference.property.internalValue"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptor getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptor">DataAwsccGluePartitionPartitionInputStorageDescriptor</a>

---


### DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference;

new DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId">schemaId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">schemaVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">schemaVersionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference">DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference getSchemaId();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `schemaVersionId`<sup>Required</sup> <a name="schemaVersionId" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```java
public java.lang.String getSchemaVersionId();
```

- *Type:* java.lang.String

---

##### `schemaVersionNumber`<sup>Required</sup> <a name="schemaVersionNumber" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```java
public java.lang.Number getSchemaVersionNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference">DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReference</a>

---


### DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference;

new DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">registryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">schemaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```java
public java.lang.String getRegistryName();
```

- *Type:* java.lang.String

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```java
public java.lang.String getSchemaArn();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">DataAwsccGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

---


### DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference;

new DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">serializationLibrary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo">DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `serializationLibrary`<sup>Required</sup> <a name="serializationLibrary" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```java
public java.lang.String getSerializationLibrary();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo">DataAwsccGluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

---


### DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference;

new DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">skewedColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">skewedColumnValueLocationMaps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">skewedColumnValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo">DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `skewedColumnNames`<sup>Required</sup> <a name="skewedColumnNames" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skewedColumnValueLocationMaps`<sup>Required</sup> <a name="skewedColumnValueLocationMaps" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```java
public java.lang.String getSkewedColumnValueLocationMaps();
```

- *Type:* java.lang.String

---

##### `skewedColumnValues`<sup>Required</sup> <a name="skewedColumnValues" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```java
public java.util.List<java.lang.String> getSkewedColumnValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo">DataAwsccGluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

---


### DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList;

new DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.get"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference <a name="DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_glue_partition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference;

new DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.column">column</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrder">sortOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns">DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.column"></a>

```java
public java.lang.String getColumn();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```java
public java.lang.Number getSortOrder();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```java
public DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGluePartition.DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns">DataAwsccGluePartitionPartitionInputStorageDescriptorSortColumns</a>

---



