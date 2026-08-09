# `dataAwsccKendraIndex` Submodule <a name="`dataAwsccKendraIndex` Submodule" id="@cdktn/provider-awscc.dataAwsccKendraIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKendraIndex <a name="DataAwsccKendraIndex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/kendra_index awscc_kendra_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndex;

DataAwsccKendraIndex.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/kendra_index#id DataAwsccKendraIndex#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKendraIndex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndex;

DataAwsccKendraIndex.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndex;

DataAwsccKendraIndex.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndex;

DataAwsccKendraIndex.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndex;

DataAwsccKendraIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccKendraIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccKendraIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccKendraIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccKendraIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/kendra_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKendraIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.capacityUnits">capacityUnits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference">DataAwsccKendraIndexCapacityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.documentMetadataConfigurations">documentMetadataConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList">DataAwsccKendraIndexDocumentMetadataConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.indexId">indexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference">DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList">DataAwsccKendraIndexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.userContextPolicy">userContextPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.userTokenConfigurations">userTokenConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList">DataAwsccKendraIndexUserTokenConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capacityUnits`<sup>Required</sup> <a name="capacityUnits" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.capacityUnits"></a>

```java
public DataAwsccKendraIndexCapacityUnitsOutputReference getCapacityUnits();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference">DataAwsccKendraIndexCapacityUnitsOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `documentMetadataConfigurations`<sup>Required</sup> <a name="documentMetadataConfigurations" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.documentMetadataConfigurations"></a>

```java
public DataAwsccKendraIndexDocumentMetadataConfigurationsList getDocumentMetadataConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList">DataAwsccKendraIndexDocumentMetadataConfigurationsList</a>

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.serverSideEncryptionConfiguration"></a>

```java
public DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference getServerSideEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference">DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.tags"></a>

```java
public DataAwsccKendraIndexTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList">DataAwsccKendraIndexTagsList</a>

---

##### `userContextPolicy`<sup>Required</sup> <a name="userContextPolicy" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.userContextPolicy"></a>

```java
public java.lang.String getUserContextPolicy();
```

- *Type:* java.lang.String

---

##### `userTokenConfigurations`<sup>Required</sup> <a name="userTokenConfigurations" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.userTokenConfigurations"></a>

```java
public DataAwsccKendraIndexUserTokenConfigurationsList getUserTokenConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList">DataAwsccKendraIndexUserTokenConfigurationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndex.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKendraIndexCapacityUnits <a name="DataAwsccKendraIndexCapacityUnits" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexCapacityUnits;

DataAwsccKendraIndexCapacityUnits.builder()
    .build();
```


### DataAwsccKendraIndexConfig <a name="DataAwsccKendraIndexConfig" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexConfig;

DataAwsccKendraIndexConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/kendra_index#id DataAwsccKendraIndex#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKendraIndexDocumentMetadataConfigurations <a name="DataAwsccKendraIndexDocumentMetadataConfigurations" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexDocumentMetadataConfigurations;

DataAwsccKendraIndexDocumentMetadataConfigurations.builder()
    .build();
```


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance;

DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance.builder()
    .build();
```


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems;

DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems.builder()
    .build();
```


### DataAwsccKendraIndexDocumentMetadataConfigurationsSearch <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsSearch" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch;

DataAwsccKendraIndexDocumentMetadataConfigurationsSearch.builder()
    .build();
```


### DataAwsccKendraIndexServerSideEncryptionConfiguration <a name="DataAwsccKendraIndexServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexServerSideEncryptionConfiguration;

DataAwsccKendraIndexServerSideEncryptionConfiguration.builder()
    .build();
```


### DataAwsccKendraIndexTags <a name="DataAwsccKendraIndexTags" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexTags;

DataAwsccKendraIndexTags.builder()
    .build();
```


### DataAwsccKendraIndexUserTokenConfigurations <a name="DataAwsccKendraIndexUserTokenConfigurations" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexUserTokenConfigurations;

DataAwsccKendraIndexUserTokenConfigurations.builder()
    .build();
```


### DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration <a name="DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration;

DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.builder()
    .build();
```


### DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration <a name="DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration;

DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKendraIndexCapacityUnitsOutputReference <a name="DataAwsccKendraIndexCapacityUnitsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexCapacityUnitsOutputReference;

new DataAwsccKendraIndexCapacityUnitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits">queryCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits">storageCapacityUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits">DataAwsccKendraIndexCapacityUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryCapacityUnits`<sup>Required</sup> <a name="queryCapacityUnits" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits"></a>

```java
public java.lang.Number getQueryCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `storageCapacityUnits`<sup>Required</sup> <a name="storageCapacityUnits" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits"></a>

```java
public java.lang.Number getStorageCapacityUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnitsOutputReference.property.internalValue"></a>

```java
public DataAwsccKendraIndexCapacityUnits getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexCapacityUnits">DataAwsccKendraIndexCapacityUnits</a>

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsList <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsList" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexDocumentMetadataConfigurationsList;

new DataAwsccKendraIndexDocumentMetadataConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.get"></a>

```java
public DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference;

new DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.relevance">relevance</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.search">search</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference">DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations">DataAwsccKendraIndexDocumentMetadataConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `relevance`<sup>Required</sup> <a name="relevance" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.relevance"></a>

```java
public DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference getRelevance();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference</a>

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.search"></a>

```java
public DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference getSearch();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference">DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsOutputReference.property.internalValue"></a>

```java
public DataAwsccKendraIndexDocumentMetadataConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurations">DataAwsccKendraIndexDocumentMetadataConfigurations</a>

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference;

new DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.freshness">freshness</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.importance">importance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.rankOrder">rankOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.valueImportanceItems">valueImportanceItems</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `freshness`<sup>Required</sup> <a name="freshness" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.freshness"></a>

```java
public IResolvable getFreshness();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `importance`<sup>Required</sup> <a name="importance" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.importance"></a>

```java
public java.lang.Number getImportance();
```

- *Type:* java.lang.Number

---

##### `rankOrder`<sup>Required</sup> <a name="rankOrder" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.rankOrder"></a>

```java
public java.lang.String getRankOrder();
```

- *Type:* java.lang.String

---

##### `valueImportanceItems`<sup>Required</sup> <a name="valueImportanceItems" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.valueImportanceItems"></a>

```java
public DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList getValueImportanceItems();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceOutputReference.property.internalValue"></a>

```java
public DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevance</a>

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList;

new DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.get"></a>

```java
public DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference;

new DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItemsOutputReference.property.internalValue"></a>

```java
public DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems">DataAwsccKendraIndexDocumentMetadataConfigurationsRelevanceValueImportanceItems</a>

---


### DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference <a name="DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference;

new DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.displayable">displayable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.facetable">facetable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.searchable">searchable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.sortable">sortable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch">DataAwsccKendraIndexDocumentMetadataConfigurationsSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayable`<sup>Required</sup> <a name="displayable" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.displayable"></a>

```java
public IResolvable getDisplayable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `facetable`<sup>Required</sup> <a name="facetable" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.facetable"></a>

```java
public IResolvable getFacetable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `searchable`<sup>Required</sup> <a name="searchable" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.searchable"></a>

```java
public IResolvable getSearchable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `sortable`<sup>Required</sup> <a name="sortable" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.sortable"></a>

```java
public IResolvable getSortable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearchOutputReference.property.internalValue"></a>

```java
public DataAwsccKendraIndexDocumentMetadataConfigurationsSearch getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexDocumentMetadataConfigurationsSearch">DataAwsccKendraIndexDocumentMetadataConfigurationsSearch</a>

---


### DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference <a name="DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference;

new DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration">DataAwsccKendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccKendraIndexServerSideEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexServerSideEncryptionConfiguration">DataAwsccKendraIndexServerSideEncryptionConfiguration</a>

---


### DataAwsccKendraIndexTagsList <a name="DataAwsccKendraIndexTagsList" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexTagsList;

new DataAwsccKendraIndexTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.get"></a>

```java
public DataAwsccKendraIndexTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccKendraIndexTagsOutputReference <a name="DataAwsccKendraIndexTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexTagsOutputReference;

new DataAwsccKendraIndexTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTags">DataAwsccKendraIndexTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccKendraIndexTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexTags">DataAwsccKendraIndexTags</a>

---


### DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference <a name="DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference;

new DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField">groupAttributeField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField">userNameAttributeField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupAttributeField`<sup>Required</sup> <a name="groupAttributeField" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```java
public java.lang.String getGroupAttributeField();
```

- *Type:* java.lang.String

---

##### `userNameAttributeField`<sup>Required</sup> <a name="userNameAttributeField" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```java
public java.lang.String getUserNameAttributeField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---


### DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference <a name="DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference;

new DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex">claimRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField">groupAttributeField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation">keyLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretManagerArn">secretManagerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField">userNameAttributeField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `claimRegex`<sup>Required</sup> <a name="claimRegex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex"></a>

```java
public java.lang.String getClaimRegex();
```

- *Type:* java.lang.String

---

##### `groupAttributeField`<sup>Required</sup> <a name="groupAttributeField" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```java
public java.lang.String getGroupAttributeField();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `keyLocation`<sup>Required</sup> <a name="keyLocation" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation"></a>

```java
public java.lang.String getKeyLocation();
```

- *Type:* java.lang.String

---

##### `secretManagerArn`<sup>Required</sup> <a name="secretManagerArn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretManagerArn"></a>

```java
public java.lang.String getSecretManagerArn();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `userNameAttributeField`<sup>Required</sup> <a name="userNameAttributeField" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```java
public java.lang.String getUserNameAttributeField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---


### DataAwsccKendraIndexUserTokenConfigurationsList <a name="DataAwsccKendraIndexUserTokenConfigurationsList" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexUserTokenConfigurationsList;

new DataAwsccKendraIndexUserTokenConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.get"></a>

```java
public DataAwsccKendraIndexUserTokenConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccKendraIndexUserTokenConfigurationsOutputReference <a name="DataAwsccKendraIndexUserTokenConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_kendra_index.DataAwsccKendraIndexUserTokenConfigurationsOutputReference;

new DataAwsccKendraIndexUserTokenConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration">jsonTokenTypeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration">jwtTokenTypeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations">DataAwsccKendraIndexUserTokenConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jsonTokenTypeConfiguration`<sup>Required</sup> <a name="jsonTokenTypeConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration"></a>

```java
public DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference getJsonTokenTypeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">DataAwsccKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a>

---

##### `jwtTokenTypeConfiguration`<sup>Required</sup> <a name="jwtTokenTypeConfiguration" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration"></a>

```java
public DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference getJwtTokenTypeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">DataAwsccKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurationsOutputReference.property.internalValue"></a>

```java
public DataAwsccKendraIndexUserTokenConfigurations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKendraIndex.DataAwsccKendraIndexUserTokenConfigurations">DataAwsccKendraIndexUserTokenConfigurations</a>

---



